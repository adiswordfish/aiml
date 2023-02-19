// fetch('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')
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Failed to retrieve data');
//         }
//     })
//     .then(data => {
//         print("hellow world")
//     })
//     .catch(error => {
//         console.error(error);
//     });
    import readline from './readline';
    var name = readline("What is your name?");
    
    println("Hello " + name + "!");
    
    // Prints out the variable type
    println("Name is a " + typeof name);