array1=["pen","paper","book","bottle"]
random_no = Math.floor((Math.random()*array1.length)+1);
Element_of_array = array1[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+Element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;