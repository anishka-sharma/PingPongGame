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
            this.x += x;
            this.y += y;
            this.internalGraphics.x += x;
            this.internalGraphics.y += y;
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
            this.y += y;
            this.internalGraphics.position.y += y;
        };
        return Paddle;
    }());
    EAPingPong.Paddle = Paddle;
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
/// <reference path="Paddle.ts" />
/// <reference path="Ball.ts" />
/// <reference path="PingPongGameController.ts" />
var EAPingPong;
(function (EAPingPong) {
    var Dispose = /** @class */ (function () {
        function Dispose(paddle1, paddle2, ball, stage) {
            this.paddle1 = paddle1;
            this.paddle2 = paddle2;
            this.ball = ball;
            this.stage = stage;
        }
        Dispose.prototype.remove = function () {
            this.stage.removeChild(this.paddle1.internalGraphics);
            this.stage.removeChild(this.paddle2.internalGraphics);
            this.stage.removeChild(this.ball.internalGraphics);
        };
        return Dispose;
    }());
    EAPingPong.Dispose = Dispose;
})(EAPingPong || (EAPingPong = {}));
/// <reference path="Ball.ts" />
/// <reference path="Paddle.ts" />
/// <reference path="GameController.ts" />
/// <reference path="CollisionsHandler.ts"/>
/// <reference path="Dispose.ts" />
var EAPingPong;
(function (EAPingPong) {
    var PingPongGameController = /** @class */ (function (_super) {
        __extends(PingPongGameController, _super);
        function PingPongGameController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PingPongGameController.prototype.start = function () {
            this.paddle1 = new EAPingPong.Paddle(20, 10, 10, 100, this.app.stage);
            this.paddle2 = new EAPingPong.Paddle(770, 10, 10, 100, this.app.stage);
            this.ball = new EAPingPong.Ball(400, 400, 20, 20, this.app.stage);
            this.boundTop = new EAPingPong.Boundaries(0, 0, 800, 10, this.app.stage);
            this.boundRight = new EAPingPong.Boundaries(790, 0, 10, 800, this.app.stage);
            this.boundBottom = new EAPingPong.Boundaries(0, 790, 800, 10, this.app.stage);
            this.boundLeft = new EAPingPong.Boundaries(0, 0, 10, 800, this.app.stage);
            this.ballVelocityX = -2;
            this.ballVelocityY = -2;
            this.collider = new EAPingPong.CollisionsHandler();
            this.destroy = new EAPingPong.Dispose(this.paddle1, this.paddle2, this.ball, this.app.stage);
            this.computerScore = 0;
            this.playerScore = 0;
        };
        PingPongGameController.prototype.update = function () {
            var _this = this;
            //move ball             
            moveBall();
            function moveBall() {
                _this.ball.moveTo(_this.ballVelocityX, _this.ballVelocityY);
            }
            //move paddle 
            movePaddle();
            _this.paddleCollider(_this.paddle1, _this.ball);
            _this.paddleCollider(_this.paddle2, _this.ball);
            _this.boundCollider(_this.boundTop, _this.ball);
            _this.boundCollider(_this.boundBottom, _this.ball);
            _this.boundLeftSideCollider(_this.boundLeft, _this.ball);
            _this.boundRightSideCollider(_this.boundRight, _this.ball);
            function movePaddle() {
                movePaddle1();
                movePaddle2();
                function movePaddle1() {
                    var x1 = _this.paddle1.x;
                    var y1 = _this.ball.y - _this.paddle1.height / 2;
                    if (y1 < 0) {
                        y1 = 0;
                    }
                    else if (y1 + 120 > _this.app.screen.height) {
                        y1 = _this.app.screen.height - _this.paddle1.height - 20;
                    }
                    _this.paddle1.y = y1;
                    _this.paddle1.internalGraphics.position.y = y1;
                }
                function movePaddle2() {
                    var x1 = _this.app.renderer.plugins.interaction.mouse.global.x;
                    var y1 = _this.app.renderer.plugins.interaction.mouse.global.y;
                    if (y1 < 0) {
                        y1 = 0;
                    }
                    else if (y1 + 120 > _this.app.screen.height) {
                        y1 = _this.app.screen.height - _this.paddle2.height - 20;
                    }
                    _this.paddle2.y = y1;
                    _this.paddle2.internalGraphics.position.y = y1;
                }
            }
            //collider
        };
        PingPongGameController.prototype.paddleCollider = function (paddle, ball) {
            if (this.collider.checkCollision(paddle, ball)) {
                this.ballVelocityX *= -1;
            }
        };
        PingPongGameController.prototype.boundCollider = function (boundary, ball) {
            if (this.collider.checkCollision(boundary, ball)) {
                this.ballVelocityY *= -1;
            }
        };
        PingPongGameController.prototype.boundLeftSideCollider = function (boundLeft, ball) {
            if (this.collider.checkCollision(boundLeft, ball)) {
                this.playerScore++;
                this.destroy.remove();
                this.start();
            }
        };
        PingPongGameController.prototype.boundRightSideCollider = function (boundRight, ball) {
            if (this.collider.checkCollision(boundRight, ball)) {
                this.computerScore++;
                this.destroy.remove();
                this.start();
            }
        };
        return PingPongGameController;
    }(EAPingPong.GameController));
    EAPingPong.PingPongGameController = PingPongGameController;
})(EAPingPong || (EAPingPong = {}));
/// <reference path="iRigidBody.ts" />
/// <reference path="PingPongGameController.ts" />
var EAPingPong;
(function (EAPingPong) {
    var CollisionsHandler = /** @class */ (function () {
        function CollisionsHandler() {
        }
        CollisionsHandler.prototype.checkCollision = function (body1, body2) {
            if (body1.x < body2.x + body2.width / 2 &&
                body1.x + body1.width > body2.x - body2.width / 2 &&
                body1.y < body2.y + body2.height / 2 &&
                body1.height + body1.y > body2.y - body2.width / 2) {
                return true;
            }
        };
        return CollisionsHandler;
    }());
    EAPingPong.CollisionsHandler = CollisionsHandler;
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
var EAPingPong;
(function (EAPingPong) {
    var ScoreHandler = /** @class */ (function () {
        // private stage!:any;
        function ScoreHandler(boundary) {
            this.computerScore = 0;
            this.playerScore = 0;
            this.boundary = boundary;
        }
        ScoreHandler.prototype.score = function () {
            if (this.boundary.x === 0) {
                this.playerScore++;
            }
            else {
                this.computerScore++;
            }
        };
        return ScoreHandler;
    }());
    EAPingPong.ScoreHandler = ScoreHandler;
})(EAPingPong || (EAPingPong = {}));
