import React from 'react';
import zxcvbn from 'zxcvbn';
const PasswordsStrengthindicator = ({ password }) => {
  const testResult = zxcvbn(password);
  console.log(password)
  console.log(testResult.score)
  const num = testResult.score * 100 / 4
  console.log(num)



  const createpasswordlabel=() => {
    switch (testResult.score) {
      case 0:
        return 'very weak';
      case 1:
        return 'weak';
      case 2:
        return 'fear';
      case 3:
        return 'good';
      case 4:
          return 'strong';
      default:
        return ''
    }

  }

  const progressBarColor=() => {
    switch (testResult.score) {
      case 0:
        return '#f00909b6';
      case 1:
        return '#f0e109';
      case 2:
        return 'orange';
      case 3:
        return '#09f014b6';
      case 4:
          return 'green';
      default:
        return 'none'
    }

  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background:`${progressBarColor()}`,
    height: '7px'
  })


  return (
    <>
      <div className='progress' style={{ height: '7px' }}>
        <div className='progress-bar' style={changePasswordColor()}></div>
      </div>
      <p style={{color:progressBarColor() }}>{createpasswordlabel()}</p>
    </>
  )
}

export default PasswordsStrengthindicator;