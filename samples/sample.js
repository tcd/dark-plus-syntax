// Normal Comments
/* Normal Comments */
/**
 * Doc Comments
 * param:
 * @param {*function} g Lorem Ipsum Explain Yadda Yadda
 */
function coroutine(g) {
    let it = g();
    return function () {
        return it.next().apply(it, arguments);
    };
}

var step = coroutine(function* () {
    var x = 1 + (yield);
    var y = 1 + (yield);
    yield(x + y);
});


/**
 * Content inside Multiline Comments
 *
 */
step();
step(10);
console.log(
    `Meaning of life: ${step(30).value}.`
);
