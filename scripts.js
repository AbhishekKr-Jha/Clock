setInterval(()=>{
let date=new Date;
thours=date.getHours();
tmin=date.getMinutes(); 
tsec=date.getSeconds(); 

rh=thours*30+ tmin/2
rm=tmin*6
rs=tsec*6

hour.style.transform=`rotate(${rh}deg)`
min.style.transform=`rotate(${rm}deg)`
sec.style.transform=`rotate(${rs}deg)`

// console.log(hours,min,sec)
},1000)