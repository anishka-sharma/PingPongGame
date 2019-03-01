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
var PingPongGame;
(function (PingPongGame) {
    var Ball = /** @class */ (function () {
        function Ball(x, y, radius, stage) {
            this.x = x;
            this.y = y;
            this.width = 2 * radius;
            this.height = 2 * radius;
            this.stage = stage;
            this.graphics = new PIXI.Graphics;
            this.drawBall();
        }
        Ball.prototype.drawBall = function () {
            this.graphics.beginFill(0xFFFF00);
            this.graphics.lineStyle(5, 0xFF0000);
            this.graphics.drawCircle(this.x, this.y, this.height / 2, this.stage);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
            return this;
        };
        Ball.prototype.moveTo = function (x, y) {
            this.x = x;
            this.y = y;
            this.graphics.position.x += x;
            this.graphics.position.y += y;
        };
        return Ball;
    }());
    PingPongGame.Ball = Ball;
})(PingPongGame || (PingPongGame = {}));
var PingPongGame;
(function (PingPongGame) {
    var Boundaries = /** @class */ (function () {
        function Boundaries(x, y, width, height, stage) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.graphics = new PIXI.Graphics;
            this.drawPaddle();
        }
        Boundaries.prototype.drawPaddle = function () {
            this.graphics.beginFill(0xFFFF00);
            this.graphics.lineStyle(5, 0xFF0000);
            this.graphics.drawRect(this.x, this.y, this.width, this.height, this.stage);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
        };
        Boundaries.prototype.moveTo = function (x, y) {
        };
        return Boundaries;
    }());
    PingPongGame.Boundaries = Boundaries;
})(PingPongGame || (PingPongGame = {}));
var PingPongGame;
(function (PingPongGame) {
    var Collider = /** @class */ (function () {
        function Collider() {
        }
        return Collider;
    }());
    PingPongGame.Collider = Collider;
})(PingPongGame || (PingPongGame = {}));
var PingPongGame;
(function (PingPongGame) {
    var Paddle = /** @class */ (function () {
        function Paddle(x, y, width, height, stage) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.graphics = new PIXI.Graphics;
            this.drawPaddle();
        }
        Paddle.prototype.drawPaddle = function () {
            this.graphics.beginFill(0xFFFF00);
            this.graphics.lineStyle(5, 0xFF0000);
            this.graphics.drawRect(this.x, this.y, this.width, this.height, this.stage);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
            return this;
        };
        Paddle.prototype.moveTo = function (x, y) {
            this.x = x;
            this.y = y;
            this.graphics.position.y += y;
        };
        return Paddle;
    }());
    PingPongGame.Paddle = Paddle;
})(PingPongGame || (PingPongGame = {}));
/// <reference path="Paddle.ts" />
var PingPongGame;
(function (PingPongGame) {
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
    PingPongGame.GameController = GameController;
})(PingPongGame || (PingPongGame = {}));
/// <reference path="Ball.ts" />
/// <reference path="Paddle.ts" />
/// <reference path="GameController.ts" />
var PingPongGame;
(function (PingPongGame) {
    var PingPongGameController = /** @class */ (function (_super) {
        __extends(PingPongGameController, _super);
        function PingPongGameController() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.moveVelocityX = 2;
            _this_1.moveVelocityY = 2;
            return _this_1;
        }
        PingPongGameController.prototype.start = function () {
            this.paddle1 = new PingPongGame.Paddle(0, 0, 10, 100, this.app);
            this.paddle2 = new PingPongGame.Paddle(790, 0, 10, 100, this.app);
            this.ball = new PingPongGame.Ball(400, 400, 10, this.app);
            this.boundTop = new PingPongGame.Boundaries(800, 0, 800, 0, this.app);
            this.boundRight = new PingPongGame.Boundaries(800, 0, 0, -800, this.app);
            this.boundBottom = new PingPongGame.Boundaries(800, -800, 0, 0, this.app);
            this.boundLeft = new PingPongGame.Boundaries(0, -800, 2, 800, this.app);
        };
        PingPongGameController.prototype.update = function (delta) {
            var _this = this;
            //move ball 
            moveBall();
            function moveBall() {
                _this.ball.moveTo(_this.moveVelocityX, _this.moveVelocityY);
            }
            //move paddle 
            movePaddle();
            function movePaddle() {
                movePaddle1();
                movePaddle2();
                function movePaddle1() {
                    _this.paddle1.moveTo(_this.paddle1.x, _this.moveVelocityY);
                }
                function movePaddle2() {
                    // let y2 = _this.paddle2.y;
                    var x1 = _this.app.renderer.plugins.interaction.mouse.global.x;
                    var y1 = _this.app.renderer.plugins.interaction.mouse.global.y;
                    if (y1 < 0)
                        y1 = 0 + _this.paddle2.height / 2;
                    if (y1 > _this.app.screen.height)
                        y1 = _this.app.screen.height - _this.paddle2.height / 2;
                    _this.paddle2.y = y1;
                    _this.paddle2.graphics.position.y = y1;
                    // _this.paddle2.moveTo(_this.paddle2.x, y1-_this.paddle2.height / 2);
                }
            }
        };
        return PingPongGameController;
    }(PingPongGame.GameController));
    PingPongGame.PingPongGameController = PingPongGameController;
})(PingPongGame || (PingPongGame = {}));
/// <reference path="PingPongGameController.ts" />
var PingPongGame;
(function (PingPongGame) {
    var MGame = /** @class */ (function () {
        function MGame() {
            this.gc = new PingPongGame.PingPongGameController();
        }
        return MGame;
    }());
    PingPongGame.MGame = MGame;
    var obj = new MGame();
})(PingPongGame || (PingPongGame = {}));
