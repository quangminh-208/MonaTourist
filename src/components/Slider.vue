<template>

</template>

<script>
// Auto slider
let slide_index = 2;
setInterval(function() {
    document.getElementById('radio' + slide_index).checked = true;
    slide_index++;
    if (slide_index > 3)
    slide_index = 1;
}, 4000);

// Navigation slider
document.querySelector('.slider__btn-left').addEventListener('click', function() {
    document.getElementById('radio' + slide_index).checked = true;
    slide_index--;
    if (slide_index < 1)
    slide_index = 3;
});
document.querySelector('.slider__btn-right').addEventListener('click', function() {
    document.getElementById('radio' + slide_index).checked = true;
    slide_index++;
    if (slide_index > 3)
    slide_index = 1;
});
</script>