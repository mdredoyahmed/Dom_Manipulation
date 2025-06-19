class Invoice{
 
    constructor(){
        this.items = []
    }

 addItem(items){
    this.items.push(items)
 }

print (printer){

    if(printer instanceof Printer){

           printer.print(this.items)
    }
  else {
    // console.log('I dont deal with this type of printer');
    throw new Error('invaild Error');
}
}
}
class Printer{
    print(items){
        console.log(`printhing on pdf - Total Items = ${items.length}`);
    }
}

class PdfPrinter extends Printer{
     print(items){
         console.log(`printhing on paper- Total Items = ${items.length}`);
    }
}

class HtmlPrinter extends Printer {
     print(items){
           console.log(`printhing on html- Total Items = ${items.length}`);
    }
}

class User{

}

const invoice = new Invoice()
invoice.addItem("mouse 3 3000")
invoice.addItem("monitor 1 2000")
invoice.addItem("ssd 1tb 7500")

const pdfPrinter = new PdfPrinter()
invoice.print(pdfPrinter)
invoice.print(User)