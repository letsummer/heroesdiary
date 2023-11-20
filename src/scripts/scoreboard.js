// const table = document.createElement("table");
// const thead = document.createElement("thead");
// const tbody = document.createElement("tbody");

// table.appendChild(thead);
// table.appendChild(tbody);


// console.log("this is scoreboard");
// function tableCreate(){
//     const thead = document.querySelector('#scorebored table thead'); 
//     const tbody = document.querySelector('#scorebored table tbody');

//     const row = thead.insertRow();

//     for (let c=0;c<16;++c) {
//         let col = c;
//         if(c==13) col = "H";
//         else if(c==14) col = "E";
//         else if(c==15) col = "B";
//         else if(c==0) col = "----";
//         row.insertCell().textContent = `${col}`;
//     }

//     for(let r=1;r<3;++r) {
//         const row = tbody.insertRow();
//         for (let c=0;c<16;++c) {
//             let col = c;
//             if(c==0) col = "----";
//             row.insertCell().textContent = `${col}`;
//         }
//     }

//     console.log("created!");
// }

// tableCreate();