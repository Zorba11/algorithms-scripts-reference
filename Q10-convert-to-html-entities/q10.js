function convertHTML(str) {
    let htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
      };

   let newStr = str.replace(/([&<>\"'])/g, (match) => htmlEntities[match])
   console.log(newStr);

    return newStr;
  }
  
//   convertHTML("Dolce & Gabbana"); // should return "Dolce &amp; Gabbana"
// convertHTML("Hamburgers < Pizza < Tacos") // should return "Hamburgers &lt; Pizza &lt; Tacos"
convertHTML("<>") // should return "&lt;&gt;" 