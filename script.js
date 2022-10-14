actualTemp = 80;

desiredTemp = 70;

if (actualTemp === desiredTemp){
    console.log('Standby');
}

if (actualTemp > desiredTemp){
    console.log('Run A/C');
}

if (actualTemp < desiredTemp){
    console.log('Run heat');
}