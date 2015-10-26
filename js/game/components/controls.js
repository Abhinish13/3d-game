(function()
{
  'use strict';
  window.GAME = window.GAME ||
  {};

  GAME.controls = {};

  GAME.controls.initMouse = function()
  {
    ENGINE.controls.pointer.onMove(function(event, point)
    {
      GAME.var.cameraTargetLon += point.x * 0.1;
      GAME.var.cameraTargetLat -= point.y * 0.1;
    });
  };

  GAME.controls.update = function()
  {
    if (ENGINE.controls.isKeyDown(ENGINE.controls.key.UP) || ENGINE.controls.isKeyDown(ENGINE.controls.key.W))
    {
      GAME.camera.moveForward();
    }

    if (ENGINE.controls.isKeyDown(ENGINE.controls.key.DOWN) || ENGINE.controls.isKeyDown(ENGINE.controls.key.S))
    {
      GAME.camera.moveBackward();
    }

    if (ENGINE.controls.isKeyDown(ENGINE.controls.key.LEFT) || ENGINE.controls.isKeyDown(ENGINE.controls.key.A))
    {
      GAME.camera.moveLeft();
    }

    if (ENGINE.controls.isKeyDown(ENGINE.controls.key.RIGHT) || ENGINE.controls.isKeyDown(ENGINE.controls.key.D))
    {
      GAME.camera.moveRight();
    }
  };
})();
