function woodCalculator(chairQuantity = 0, tableQuantity = 0, bedQuantity = 0) {
    let parChair = 3;
    let perTable = 10;
    let perBed = 50;

    let totalChairWood = parChair * chairQuantity;
    let totalTableWood = perTable * tableQuantity;
    let totalBedWood = perBed * bedQuantity;

    let totalWood = totalChairWood + totalTableWood + totalBedWood;
    console.log('wood for chair : ', totalChairWood, 'cft')
    console.log('wood for table:', totalTableWood, 'cft')
    console.log('wood for bed:', totalBedWood, 'cft')
    console.log('total needed wood :', totalWood, 'cft')

}

woodCalculator(5)