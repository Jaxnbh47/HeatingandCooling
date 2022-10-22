let actualTemp = 80;

let desiredTemp = 70;

if (actualTemp === desiredTemp){
    console.log('Standby');
}

else if (actualTemp > desiredTemp){
    console.log('Run A/C');
}

else if (actualTemp < desiredTemp){
    console.log('Run heat');
}