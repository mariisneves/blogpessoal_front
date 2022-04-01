import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Box } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import CadastroPostagem from '../cadastroPostagem/CadastroPostagem';
import './ModalPostagem.css';


// responsavel por centralizar o model
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

//estilização do modal
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalPostagem() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    /* se valor do state open: true -> modal aberto | se valor do state open: false -> modal fechado */ 

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //corpo do modal
    const body = (
        <div style={modalStyle} className={classes.paper}>
        {/* toda a estilização de modalStyle é aplicada a essa div */}
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />
                {/* X pra fechar o modal */}

            </Box>

            <CadastroPostagem />

        </div>
    );

    return (
        <div>
            <Button
                variant="outlined"
                className="btnModal"
                onClick={handleOpen}>Nova Postagem</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
export default ModalPostagem