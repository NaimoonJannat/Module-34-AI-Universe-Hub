const loadCards = async() =>{
    const url= "https://openapi.programming-hero.com/api/ai/tools";
    const res = await fetch(url);
    const data = await res.json();
    const tools= data.data.tools;
    // console.log(tools);
    display(tools); 
}
loadCards();
// 1: get the container Element
const cardContainer = document.getElementById('cardContainer');


const display = (tools) =>{
    tools.forEach(tool =>{
        //  console.log(tool.features);
        // 2: create a div and set classlist
        const toolCard=document.createElement('div');

        // 3:set innerHTML
        toolCard.innerHTML =`
        <div class="card pb-8 w-full h-full bg-white border-[#1111111A] shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="${tool.image}"
                         class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">Features</h2>
                    <ol class="text-base text-[#585858]">
                        <li><span>1. </span>${tool.features[0]}</li>
                        <li><span>2. </span>${tool.features[1]}</li>
                        <li><span>3. </span>${tool.features[2]}</li>
                    </ol>
                    <div class="divider"></div>
                </div>
                <div class="flex justify-around">
                    <div>
                        <h1 class="text-2xl card-title">${tool.name}</h1>
                        <div class="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                                    stroke="#585858" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <p class="text-base text-[#585858]">${tool?.published_in || 'No Published Date'}</p>
                        </div>
                    </div>
                    <div>
                        <button onclick="handelArrowBtn('${tool.id}')" class="btn btn-circle bg-[#FEF7F7] text-[#EB5757]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        // 4: appendChild
        cardContainer.appendChild(toolCard);
         
    });
}

const handelArrowBtn = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    const tech = data.data;
    console.log(tech);
    showToolModal(tech);

}
const showToolModal = (tech) =>{
    const showDetailContainer = document.getElementById('modalContainer');
    showDetailContainer.innerHTML = `
    <div class="p-6 lg:w-1/2 space-y-2 rounded-2xl bg-[#EB57570D] border-2 border-[#EB5757]">
    <h1>${tech.description}</h1>
    <div class="flex gap-2 flex-row w-full">
        <div class="rounded-xl p-4 w-1/3 bg-white text-xs font-bold text-[#03A30A]">
        <p>${tech?.pricing && Array.isArray(tech.pricing) ? tech.pricing[0]?.price || '' : ''}</p>

        <p>${tech?.pricing && Array.isArray(tech.pricing) ? tech.pricing[0]?.plan || '' : ''}</p>

        </div>
        <div class="rounded-xl p-4 w-1/3 bg-white text-xs font-bold text-[#F28927]">
        <p>${tech?.pricing && Array.isArray(tech.pricing) ? tech.pricing[1]?.price || '' : ''}</p>

        <p>${tech?.pricing && Array.isArray(tech.pricing) ? tech.pricing[1]?.plan || '' : ''}</p>
        </div>
        <div class="rounded-xl p-4 w-1/3 bg-white text-xs font-bold text-[#EB5757]">
        <p>${tech?.pricing && Array.isArray(tech.pricing) ? tech.pricing[2]?.price || '' : ''}</p>

        <p>${tech?.pricing && Array.isArray(tech.pricing) ? tech.pricing[2]?.plan || '' : ''}</p>
        </div>
    </div>
    <div class="flex flex-row justify-between">
        <div>
            <h1 class="text-lg font-semibold">Features</h1>
            <ol>
                
            </ol>
        </div>
        <div>
            <h1 class="text-lg font-semibold">Integrations</h1>
            <ol>
            <li>${Array.isArray(tech?.integrations) ? tech.integrations[0] || '' : ''}</li>
            <li>${Array.isArray(tech?.integrations) ? tech.integrations[1] || '' : ''}</li>
            <li>${Array.isArray(tech?.integrations) ? tech.integrations[2] || '' : ''}</li>
            
            </ol>
        </div>
        
    </div>
</div>
<div class="p-6 lg:w-1/2 rounded-2xl bg-white border-[#E7E7E7] border-2 text-center">
    <img src="${tech.image_link[0]}" class="rounded-xl" alt="">
    <h1 class="text-2xl font-extrabold">${tech?.input_output_examples && Array.isArray(tech.input_output_examples) ? tech.input_output_examples[0]?.input || '' : ''}</h1>
<p class="text-base text-[#585858]">${tech?.input_output_examples && Array.isArray(tech.input_output_examples) ? tech.input_output_examples[0]?.output || '' : ''}</p>

</div>
    `;
    my_modal_4.showModal();
    
}