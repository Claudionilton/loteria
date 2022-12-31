function Randon() {
/** quantidadeNumeros =( element) => {
    console.log(element)
} **/

//const numeroInput = document.querySelector('numberInput')


for (let i = 0; i < 6; i++) {
  console.log(Math.floor(Math.random() * (1 + 60)))
}


//console.log(numeroInput)

    return (
        <div>
            <div>
                <form action="">
                    <input className="numberInput" type="number" placeholder="Quantos numeros?" onClick={(element) => this.quantidadeNumeros(element)} />
                    <button>
                        Sortear
                    </button>
                </form>
            </div>
        </div>
    )
}



export default Randon;