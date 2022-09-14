let userF=document.getElementById("neha-form");
const revEntries =() => {
    let enti13= localStorage.getItem("neha-ent");
    if(enti13){
        enti13=JSON.parse(enti13);

    }else{
        enti13=[];
    }
    return enti13;
}

let ue12 =revEntries();
const dispEntries1 =() =>{
    const e1=revEntries();
    const siddte=e1.map((entry) => {
        
        const namesidd= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailsidd= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordsidd= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobsidd= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermssidd= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rowsidd= `<tr>${namesidd} ${emailsidd} ${passwordsidd} ${dobsidd} ${acceptTermssidd}</tr>`;
        return rowsidd;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${siddte} </table>`;
    let details=document.getElementById("neha-ent");
    details.innerHTML = table;
}
const siddsaveUserForm = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    ue12.push(entry);
    localStorage.setItem("neha-ent",JSON.stringify(ue12));
    dispEntries1();
}
userF.addEventListener("submit",siddsaveUserForm);
dispEntries1();


   
        function valdate()
        {   let element= document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let d1=new Date(dob);
            var td = new Date(); 
            var age=parseInt(td.getFullYear()) - parseInt(d1.getFullYear());
            if (td.getMonth() < d1.getMonth() || (td.getMonth() === d1.getMonth() && td.getDate() < d1.getDate())) age--;
            if(!(age>18 && age <55))
            {
                element.setCustomValidity("age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

