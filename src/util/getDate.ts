
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


export const getDate = (date:Date) =>{
  return`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}