const mostrarHome = () => {
    document.getElementById('ahgsma-home').style.display = 'block';
    document.getElementById('ahgsma-informacion').style.display = 'none';
    document.getElementById('previaje-asoc').style.display = 'none';
    document.getElementById('contactanos-ahgsma').style.display = 'none';
};

const mostrarInfoAhgsma = () => {
    document.getElementById('ahgsma-home').style.display = 'none';
    document.getElementById('ahgsma-informacion').style.display = 'block';
    document.getElementById('previaje-asoc').style.display = 'none';
    document.getElementById('contactanos-ahgsma').style.display = 'none';
};

const mostrarAsocPreviaje = () => {
    document.getElementById('ahgsma-home').style.display = 'none';
    document.getElementById('ahgsma-informacion').style.display = 'none';
    document.getElementById('previaje-asoc').style.display = 'block';
    document.getElementById('contactanos-ahgsma').style.display = 'none';
};

const mostrarContact = () => {
    document.getElementById('ahgsma-home').style.display = 'none';
    document.getElementById('ahgsma-informacion').style.display = 'none';
    document.getElementById('previaje-asoc').style.display = 'none';
    document.getElementById('contactanos-ahgsma').style.display = 'block';
}