function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

function execute() {
    wearPPE().then(result => {console.log(result)
    return fightCorona() 
    }).then(data => console.log(data)).catch(err=> console.log(err))
}
execute();