function calculateTriangleArea(a, b, c) {
    // calculate the semi-perimeter (s) of the triangle
    const s = (a + b + c) / 2;
  
    // calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    return area;
  }
  
  const sideA = 5;
  const sideB = 6;
  const sideC = 7;
  
  const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  
  console.log("area: " + triangleArea);
  