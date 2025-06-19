class Invoice{
 
    constructor(){
        this.items = []
    }

 addItem(item){
    this.items.push(item)
 }

print (media = 'paper'){
    if(media= 'paper'){

           console.log(`printhing on paper - Total Items = ${this.items.length}`);

    }
    else if(media ='pdf'){

          console.log(`printhing on pdf - Total Items = ${this.items.length}`);
    }

    else if(media ='html'){

          console.log(`printhing on html- Total Items = ${this.items.length}`);
    }
    
}


}

const invoice = new Invoice()
invoice.addItem("mouse 3 3000")
invoice.addItem("monitor 1 2000")
invoice.addItem("ssd 1tb 7500")
invoice.print("html")