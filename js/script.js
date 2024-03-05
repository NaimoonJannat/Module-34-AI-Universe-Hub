const loadCards = async() =>{
    const url= "https://openapi.programming-hero.com/api/ai/tools";
    const res = await fetch(url);
    const data = await res.json();
    const tools= data.data.tools;
    // console.log(tools);
    display(tools); 
}
loadCards();

const display = (tools) =>{
    tools.forEach(tool =>{
        console.log(tool);
    });
}