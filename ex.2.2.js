const tellFortune = (jobTitle,location,partnerName,numberOfChildren) => {
    if (numberOfChildren === 1)
    return 'you will be a ' + jobTitle + ' in ' + location + ' married to ' + partnerName + ' with ' + numberOfChildren + ' child'
    else
    return 'you will be a ' + jobTitle + ' in ' + location + ' married to ' + partnerName + ' with ' + numberOfChildren + ' children'
    
    
}

console.log(tellFortune('painter','madrid','claudia',1));