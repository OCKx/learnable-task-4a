class MathUtility {
    // Class property
    static PI = 3.14159;
  
    // Class method
    static multiply(x, y) {
      return x * y;
    }
  
    // Another class method
    static square(x) {
      return x ** 2;
    }
  }
  
  // Accessing class property
  console.log('PI:', MathUtility.PI);
  
  // Using class method
  const result = MathUtility.multiply(5, 10);
  console.log('Multiplication Result:', result);
  
  // Using another class method
  const squaredValue = MathUtility.square(4);
  console.log('Square of 4:', squaredValue);
  
  



//using ES6+ classes
//This code provides implementations for three measures of central tendency
    //mean
    //median
    //mode 
//and five measures of dispersion
    //variance
    //standard deviation
    //range
    //interquartile range
    //mean absolute deviation)
  
  class DescriptiveStatistics {
    static mean(numbers) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
    }
  
    static median(numbers) {
      const sortedNumbers = numbers.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedNumbers.length / 2);
  
      if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
      } else {
        return sortedNumbers[middle];
      }
    }
  
    static mode(numbers) {
      const countMap = new Map();
      numbers.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
      });
  
      let maxCount = 0;
      let modeValues = [];
  
      countMap.forEach((count, value) => {
        if (count > maxCount) {
          maxCount = count;
          modeValues = [value];
        } else if (count === maxCount) {
          modeValues.push(value);
        }
      });
  
      return modeValues.length === numbers.length ? null : modeValues;
    }
  
    static variance(numbers) {
      const meanValue = DescriptiveStatistics.mean(numbers);
      const squaredDifferences = numbers.map(num => (num - meanValue) ** 2);
      const sumSquaredDiff = squaredDifferences.reduce((acc, val) => acc + val, 0);
      return sumSquaredDiff / numbers.length;
    }
  
    static standardDeviation(numbers) {
      return Math.sqrt(DescriptiveStatistics.variance(numbers));
    }
  
    static range(numbers) {
      const max = Math.max(...numbers);
      const min = Math.min(...numbers);
      return max - min;
    }
  
    static interquartileRange(numbers) {
      const sortedNumbers = numbers.slice().sort((a, b) => a - b);
      const lowerQ = DescriptiveStatistics.median(sortedNumbers.slice(0, Math.floor(sortedNumbers.length / 2)));
      const upperQ = DescriptiveStatistics.median(sortedNumbers.slice(Math.ceil(sortedNumbers.length / 2)));
      return upperQ - lowerQ;
    }
  
    static meanAbsoluteDeviation(numbers) {
      const meanValue = DescriptiveStatistics.mean(numbers);
      const absoluteDeviations = numbers.map(num => Math.abs(num - meanValue));
      return DescriptiveStatistics.mean(absoluteDeviations);
    }
  }
  
  // Example usage
  const data = [4, 7, 1, 9, 6, 5, 8];
  
  console.log('Mean:', DescriptiveStatistics.mean(data));
  console.log('Median:', DescriptiveStatistics.median(data));
  console.log('Mode:', DescriptiveStatistics.mode(data));
  console.log('Variance:', DescriptiveStatistics.variance(data));
  console.log('Standard Deviation:', DescriptiveStatistics.standardDeviation(data));
  console.log('Range:', DescriptiveStatistics.range(data));
  console.log('Interquartile Range:', DescriptiveStatistics.interquartileRange(data));
  console.log('Mean Absolute Deviation:', DescriptiveStatistics.meanAbsoluteDeviation(data));
  