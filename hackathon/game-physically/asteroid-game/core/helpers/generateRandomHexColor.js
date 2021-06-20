const generateRandomHexColor = () => {
    const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let colorCode = '#';
    for (let i = 0; i < 6; i++) {
        colorCode += hexChars[randomInRange(0, 16)]
    }
    return colorCode;
}