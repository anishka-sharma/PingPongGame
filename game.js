"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EAPingPong;
(function (EAPingPong) {
    var Ball = /** @class */ (function () {
        function Ball(x, y, width, height, stage) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.internalGraphics = new PIXI.Graphics;
            this.draw();
        }
        Ball.prototype.draw = function () {
            this.internalGraphics.beginFill(0xD7B5E7);
            this.internalGraphics.drawCircle(this.x, this.y, this.height / 2, this.stage);
            this.internalGraphics.endFill();
            this.stage.addChild(this.internalGraphics);
            return this;
        };
        Ball.prototype.moveTo = function (x, y) {
            this.x = x;
            this.y = y;
            this.internalGraphics.x += this.x;
            this.internalGraphics.y += this.y;
        };
        return Ball;
    }());
    EAPingPong.Ball = Ball;
})(EAPingPong || (EAPingPong = {}));
var EAPingPong;
(function (EAPingPong) {
    var Boundaries = /** @class */ (function () {
        function Boundaries(x, y, width, height, stage) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.internalGraphics = new PIXI.Graphics;
            this.draw();
        }
        Boundaries.prototype.draw = function () {
            this.internalGraphics.beginFill(0x76BDB7);
            this.internalGraphics.lineStyle(5, 0x76BDB7);
            this.internalGraphics.drawRect(this.x, this.y, this.width, this.height, this.stage);
            this.internalGraphics.endFill();
            this.stage.addChild(this.internalGraphics);
        };
        Boundaries.prototype.moveTo = function (x, y) {
        };
        return Boundaries;
    }());
    EAPingPong.Boundaries = Boundaries;
})(EAPingPong || (EAPingPong = {}));
/// <reference path="iRigidBody.ts" />
/// <reference path="pixi.js.d.ts" />
var EAPingPong;
(function (EAPingPong) {
    var Paddle = /** @class */ (function () {
        function Paddle(x, y, width, height, stage) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.internalGraphics = new PIXI.Graphics;
            this.draw();
        }
        Paddle.prototype.draw = function () {
            this.internalGraphics.beginFill(0xDFE8B8);
            this.internalGraphics.lineStyle(1, 0xFFFFFF);
            this.internalGraphics.drawRect(this.x, this.y, this.width, this.height, this.stage);
            this.internalGraphics.endFill();
            this.stage.addChild(this.internalGraphics);
            return this;
        };
        Paddle.prototype.moveTo = function (x, y) {
            this.x = x;
            this.y = y;
            this.internalGraphics.position.y += this.y;
        };
        return Paddle;
    }());
    EAPingPong.Paddle = Paddle;
})(EAPingPong || (EAPingPong = {}));
/// <reference path="Ball.ts" />
/// <reference path="Paddle.ts" />
/// <reference path="Boundaries.ts" />
var EAPingPong;
(function (EAPingPong) {
    var CollisionsHandler = /** @class */ (function () {
        function CollisionsHandler() {
        }
        CollisionsHandler.prototype.checkPaddleCollisions = function (paddle1, paddle2, ball) {
            if ((paddle1.x === (ball.x - 10)) || (paddle2.x === (ball.x - 10))) {
                return true;
            }
            return false;
        };
        CollisionsHandler.prototype.checkBoundaryTopBottomCollisions = function (boundryTop, boundaryBottom, ball) {
            if ((boundryTop.y === (ball.y - 10)) || (boundaryBottom.y === (ball.y + 10))) {
                return true;
            }
            return false;
        };
        return CollisionsHandler;
    }());
    EAPingPong.CollisionsHandler = CollisionsHandler;
})(EAPingPong || (EAPingPong = {}));
var EAPingPong;
(function (EAPingPong) {
    var GameController = /** @class */ (function () {
        function GameController() {
            this.graphics = new PIXI.Graphics();
            this.app = new PIXI.Application(800, 800);
            document.body.appendChild(this.app.view);
            this.start();
            this.app.ticker.add(this.update.bind(this));
        }
        GameController.prototype.start = function () { };
        GameController.prototype.update = function (delta) { };
        return GameController;
    }());
    EAPingPong.GameController = GameController;
})(EAPingPong || (EAPingPong = {}));
/// <reference path="Ball.ts" />
/// <reference path="Paddle.ts" />
/// <reference path="GameController.ts" />
/// <reference path="CollisionsHandler.ts" />
var EAPingPong;
(function (EAPingPong) {
    var PingPongGameController = /** @class */ (function (_super) {
        __extends(PingPongGameController, _super);
        function PingPongGameController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PingPongGameController.prototype.start = function () {
            this.paddle1 = new EAPingPong.Paddle(20, 350, 10, 100, this.app.stage);
            this.paddle2 = new EAPingPong.Paddle(770, 10, 10, 100, this.app.stage);
            this.ball = new EAPingPong.Ball(400, 400, 20, 20, this.app.stage);
            this.boundTop = new EAPingPong.Boundaries(0, 0, 800, 10, this.app.stage);
            this.boundRight = new EAPingPong.Boundaries(790, 0, 10, 800, this.app.stage);
            this.boundBottom = new EAPingPong.Boundaries(0, 790, 800, 10, this.app.stage);
            this.boundLeft = new EAPingPong.Boundaries(0, 0, 10, 800, this.app.stage);
            this.ballVelocityX = 1;
            this.ballVelocityY = 1;
        };
        PingPongGameController.prototype.update = function (delta) {
            var _this = this;
            //move ball             
            moveBall();
            function moveBall() {
                _this.ball.moveTo(_this.ballVelocityX, _this.ballVelocityY);
            }
            //move paddle 
            movePaddle();
            function movePaddle() {
                movePaddle1();
                movePaddle2();
                function movePaddle1() {
                    _this.paddle1.internalGraphics.position.y += _this.ball.y;
                }
                function movePaddle2() {
                    var x1 = _this.app.renderer.plugins.interaction.mouse.global.x;
                    var y1 = _this.app.renderer.plugins.interaction.mouse.global.y;
                    if (y1 < 0) {
                        y1 = 0;
                    }
                    if (y1 + 120 > _this.app.screen.height) {
                        y1 = _this.app.screen.height - _this.paddle2.height - 20;
                    }
                    _this.paddle2.y = y1;
                    _this.paddle2.internalGraphics.position.y = y1;
                }
            }
            //collider
            ballBoundaryCollide();
            ballPaddlesCollide();
            function ballBoundaryCollide() {
                var obj = new EAPingPong.CollisionsHandler();
                if (obj.checkBoundaryTopBottomCollisions(_this.boundTop, _this.boundBottom, _this.ball) === true) {
                    _this.ballVelocityY *= -1;
                }
            }
            function ballPaddlesCollide() {
                var obj = new EAPingPong.CollisionsHandler();
                if (obj.checkPaddleCollisions(_this.paddle1, _this.paddle2, _this.ball) === true) {
                    _this.ballVelocityX *= -1;
                }
            }
        };
        return PingPongGameController;
    }(EAPingPong.GameController));
    EAPingPong.PingPongGameController = PingPongGameController;
})(EAPingPong || (EAPingPong = {}));
/// <reference path="PingPongGameController.ts" />
var EAPingPong;
(function (EAPingPong) {
    var MainGame = /** @class */ (function () {
        function MainGame() {
            this.gc = new EAPingPong.PingPongGameController();
        }
        return MainGame;
    }());
    var obj = new MainGame();
})(EAPingPong || (EAPingPong = {}));
