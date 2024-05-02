const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1, 2, 3],
    'Dolore.'
];

let soloStrings = mix.filter(item => typeof item === 'string');

alert(soloStrings);
