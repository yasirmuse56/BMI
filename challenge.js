function calculateBMI(weight, height) {
    return weight / (height * height)
  }
  
  
  const aliWeight = 75 
  const aliHeight = 1.8
  
  const mohamedWeight = 80
  const mohamedHeight = 1.75
  
  const aliBMI = calculateBMI(aliWeight, aliHeight)
  const mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight)
  
  console.log("Ali's BMI:", aliBMI)
  console.log("Mohamed's BMI:", mohamedBMI)
  
  
  if (aliBMI > mohamedBMI) {
    console.log("Ali has a higher BMI than Mohamed.")
  } else if (mohamedBMI > aliBMI) {
    console.log("Mohamed has a higher BMI than Ali.")
  } else {
    console.log("Ali and Mohamed have the same BMI.")
  }