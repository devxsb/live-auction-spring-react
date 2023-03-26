import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {InputAdornment, TextField} from "@mui/material";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({product}) {
    const [open, setOpen] = React.useState(false);

    const [socket, setSocket] = React.useState(null);

    const [offer, setOffer] = React.useState(null);

    const [lastBid, setLastBid] = React.useState(product.price);

    const currentUser = useSelector(state => state.reduxSlice.currentUser)

    const handleOpen = () => {
        setOpen(true);
        let x = new ws(product.id)
        setSocket(x)
        x.wsConnect()
    }

    const handleClose = () => {
        setOpen(false);
        if (socket) socket.wsDisconnect()
    }

    class ws {
        sockJS = new SockJS('http://localhost:8080/bid')
        stompClient = Stomp.over(this.sockJS)
        productId = null

        constructor(productId) {
            this.productId = productId
        }

        wsConnect() {
            let that = this;
            that.stompClient.connect({}, function () {
                that.stompClient.subscribe('/topic/products/' + that.productId, function (message) {
                    that.handleReceivedMessage(JSON.parse(message.body));
                });
            });
        }

        wsDisconnect() {
            let that = this;
            if (that.stompClient != null) {
                that.stompClient.disconnect();
            }
        }

        handleReceivedMessage(message) {
            setLastBid(message.offeredPrice)
            toast(message.user.username.charAt(0).toUpperCase()
                + message.user.username.slice(1, message.user.username.length)
                + " has bid $"
                + message.offeredPrice)
        }

        sendMessage(bid) {
            let that = this;
            that.stompClient.send("/auction/bid/" + that.productId, {},
                JSON.stringify(bid));
        }
    }

    const sendOffer = () => {
        if (socket) {
            let bid = {
                username: currentUser,
                offeredPrice: offer
            }
            socket.sendMessage(bid)
        }
    }

    return (
        <>
            <Button onClick={handleOpen} style={{position: "absolute", bottom: 10, left: 0}}>
                <img src={'/assets/icons/bid.png'} alt='bid"' style={{width: '36px'}}/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Box sx={style} width={{xs: '25rem', md: '30rem'}}>
                        <CloseIcon sx={{
                            position: 'absolute',
                            top: 5,
                            left: 5,
                            cursor: 'pointer'
                        }} onClick={handleClose}/>
                        <Box sx={{pt: '60%', position: 'relative'}}>
                            <img src={product.cover} alt={product.id} style={{
                                top: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'fill',
                                position: 'absolute',
                                marginTop: '10px'
                            }}/>
                        </Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2" mt='25px'>
                            {product.name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}} component={'span'}>
                            <p>Starting price: ${product.price}</p>
                            <p>Last bid: ${lastBid}</p>
                        </Typography>
                        <TextField
                            type="number"
                            id="outlined-basic"
                            label="Your offer:"
                            variant="outlined"
                            onChange={(e) => setOffer(e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                            sx={{mt: 1}}/>
                        <Button variant="outlined"
                                color="primary"
                                style={{
                                    marginTop: '17px',
                                    marginLeft: '25px',
                                    display: 'inline-block',
                                    width: '82px'
                                }}
                                onClick={sendOffer}>
                            Send
                        </Button>
                    </Box>
                    <ToastContainer
                        toastStyle={{
                            float: 'right',
                            display: 'inline-block',
                            width: 'auto',
                            height: 'auto',
                            padding: '20px 15px 0px 15px'
                        }}
                        position="bottom-right"
                        autoClose={200000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </>
            </Modal>
        </>
    );
}
