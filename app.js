function login(){

    const txtEmail = document.getElementById('txtEmail').value;
    const txtPass = document.getElementById('txtPass').value;

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(txtEmail, txtPass);
    promise.catch(e => console.log(e.message));
}

function login(){

    const txtEmail = document.getElementById('txtEmail').value;
    const txtPass = document.getElementById('txtPass').value;

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPass);
    promise.catch(e => console.log(e.message));
}