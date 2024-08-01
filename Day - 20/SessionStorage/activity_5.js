console.log('Working...');

function saveData(key,value){
    localStorage.setItem(key,value)
    sessionStorage.setItem(key,value)
    console.log('Data Saved');
}


saveData('impt',"my name is amit")



// console.log(`localStorage :`, localStorage.getItem('impt'));
// console.log(`sessionStorage :`, sessionStorage.getItem('impt'));





// Task - 10

function clearMemory(){
    localStorage.clear()
    sessionStorage.clear()
    if(localStorage.length === 0){
        console.log('Clear LocalStorage');
    }
    if(sessionStorage.length === 0){
        console.log('Clear SessionStorage');
    }

}


clearMemory()