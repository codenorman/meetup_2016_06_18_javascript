var name = 'Brian';
var phone = '555-1212';

// using ` character allows
// multiline string
// string interpolation ${var_name} is replaced with var_value

var template = `<div>
${name} ${phone}
</div>`;

console.log(template);
