//your parameter variables go here!
// Parameters
let my_width = 200;
let my_height = 200;
let my_tile_style_background = 2; // value from 0 - 2
let my_tile_style_foreground = 0; // value from 0 - 2

const show_guide = true; // TODO - set this to false when you're ready to print

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(show_guide);

  pWallpaper.grid_settings.cell_width  = my_width;
  pWallpaper.grid_settings.cell_height = my_height;
  pWallpaper.grid_settings.row_offset  = my_width / 2;
}


// My Functions
function my_symbol_background() { 
  const my_colours = [color(255, 211, 0), color(204, 211, 51), color(153, 211, 102), color(102, 211, 153), color(51, 211, 204)];
  fill(random(my_colours));
  noStroke();

  let width_25 = my_width / 4;
  let width_50 = my_width / 2;
  let width_75 = 3 * my_width / 4;
  let height_25 = my_height / 4;
  let height_50 = my_height / 2;
  let height_75 = 3 * my_height / 4;
  
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

function my_symbol_foreground() { 

}


// Required Functions

function wallpaper_background() {
  const my_colours = [color(255, 211, 0), color(204, 211, 51), color(153, 211, 102), color(102, 211, 153), color(51, 211, 204)];
  background(random(my_colours));
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  my_symbol_background();

  my_symbol_foreground();
}
