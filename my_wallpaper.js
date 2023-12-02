// parameters
let my_width = 200;
let my_height = 200;
let my_tile_style_background = 0; // value from 0 - 2
let my_tile_style_foreground = 2; // value from 0 - 2
//let my_colours = ['#66d399', '#33D3CC','#99D366', '#FFD300'] // bg_b, bg_f, fg_b, fg_f
// let my_colours = ['#cc1f93','#a91d93', '#cc1f93', '#ff4f93'] // bg_b, bg_f, fg_b, fg_f
// let my_colours = ['#ff3374', '#ff9974', '#ff6674', '#ffff74'] // bg_b, bg_f, fg_b, fg_f
let my_colours = ['#403fff', '#3f57ff', '#3f99ff', '#3fbaff'] // bg_b, bg_f, fg_b, fg_f
const show_guide = false; // TODO - set this to false when you're ready to print

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); // DEVELOP_GLYPH; GRID_WALLPAPER; GLIDE_WALLPAPER
  pWallpaper.resolution(NINE_PORTRAIT); // FIT_TO_SCREEN; NINE_LANDSCAPE
  pWallpaper.show_guide(show_guide);

  pWallpaper.grid_settings.cell_width  = my_width;
  pWallpaper.grid_settings.cell_height = my_height;
  pWallpaper.grid_settings.row_offset  = 0; // my_width / 2;
}


// my functions

let width_25 = my_width / 4;
let width_50 = my_width / 2;
let width_75 = 3 * my_width / 4;
let height_25 = my_height / 4;
let height_50 = my_height / 2;
let height_75 = 3 * my_height / 4;

function my_symbol_background() { 
  fill(my_colours[1]); // bg_f
  noStroke();
  
  if (my_tile_style_background == 1) { // diagonal stipes
    triangle(0, height_50, width_50, my_height, 0, my_height);
    beginShape();
    vertex(0, 0);
    vertex(my_width, my_height);
    vertex(my_width, height_50);
    vertex(width_50, 0);
    endShape(CLOSE);
  } else if (my_tile_style_background == 2) { // cross stripes
    triangle(width_25, 0, width_75, 0, width_50, height_25);
    triangle(0, height_25, 0, height_75, width_25, height_50);
    triangle(my_width, height_25, my_width, height_75, width_75, height_50);
    triangle(width_25, my_height, width_75, my_height, width_50, height_75);
  } else { // default = horizontal stripes
    let hh = my_height / 6;
    rect(0, 0, my_width, hh);
    rect(0, 2 * hh, my_width, hh);
    rect(0, 4 * hh, my_width, hh);
  }
}

function draw_polygon(cx, cy, radius, sides) { 
  // my dad helped me with this function :)
  let aa = TWO_PI / sides;
  angleMode(RADIANS);
  strokeWeight(radius / 8);
  beginShape();
  for (let ii = 0; ii < sides; ii++) {
    vertex(cx + (radius * sin(ii * aa)), cy + (radius * cos(ii * aa)));
  }
  endShape(CLOSE);
}

function draw_die(cx, cy, radius, sides) {
  fill(my_colours[2]);
  stroke(my_colours[3]);
  draw_polygon(cx, cy, radius, sides);
  textSize(radius);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(my_colours[3]);
  text('' + ceil(random(sides)), cx , cy);
}

function my_symbol_foreground() { 
  let dice = [4, 6, 8, 10, 20];
  shuffle(dice, true); 

  if (my_tile_style_foreground == 1) { // all dice, grid layout
    draw_die(my_width * 0.2, my_height * 0.2, my_width * 0.15, dice[0]);
    draw_die(my_width * 0.2, my_height * 0.8, my_width * 0.15, dice[1]);
    draw_die(my_width * 0.8, my_height * 0.2, my_width * 0.15, dice[2]);
    draw_die(my_width * 0.8, my_height * 0.8, my_width * 0.15, dice[3]);
    draw_die(width_50, height_50, my_width * 0.3, dice[4]);
  } else if (my_tile_style_foreground == 2) { // all dice, stack
    draw_die(my_width * 0.15, my_height * 0.15, my_width * 0.1, dice[0]);
    draw_die(my_width * 0.85, my_height * 0.85, my_width * 0.1, dice[1]);
    draw_die(my_width * 0.3, my_height * 0.3, my_width * 0.15, dice[2]);
    draw_die(my_width * 0.7, my_height * 0.7, my_width * 0.15, dice[3]);
    draw_die(width_50, height_50, my_width * 0.2, dice[4]);
  } else { // default = single, big die
    draw_die(width_50, height_50, my_width / 3, dice[0]);
  }
}


// required functions

function wallpaper_background() {
  background(my_colours[0]); // bg_b
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  my_symbol_background();

  my_symbol_foreground();
}
