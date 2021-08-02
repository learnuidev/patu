goog.provide('app.phaser.scenes.title_scene');
goog.require('cljs.core');
if((typeof app !== 'undefined') && (typeof app.phaser !== 'undefined') && (typeof app.phaser.scenes !== 'undefined') && (typeof app.phaser.scenes.title_scene !== 'undefined') && (typeof app.phaser.scenes.title_scene.title_scene !== 'undefined')){
} else {
app.phaser.scenes.title_scene.title_scene = (new Phaser.Scene("TitleScene"));
}
app.phaser.scenes.title_scene.preload_BANG_ = (function app$phaser$scenes$title_scene$preload_BANG_(){
var this$ = this;
return this$.load.image("background_image","assets/images/battle/background.png");
});
(app.phaser.scenes.title_scene.title_scene.preload = app.phaser.scenes.title_scene.preload_BANG_);
app.phaser.scenes.title_scene.create_BANG_ = (function app$phaser$scenes$title_scene$create_BANG_(){
var this$ = this;
var background = this$.add.sprite((0),(0),"background_image");
var _ = background.setOrigin((0),(0));
var title_text = this$.add.text((100),(100),"Thimphu Town");
return title_text;
});
(app.phaser.scenes.title_scene.title_scene.create = app.phaser.scenes.title_scene.create_BANG_);

//# sourceMappingURL=app.phaser.scenes.title_scene.js.map
