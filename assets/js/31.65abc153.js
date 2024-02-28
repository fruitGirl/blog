(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{449:function(n,e,s){"use strict";s.r(e);var o=s(2),r=Object(o.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[this._v("module.exports = {\n\n  /**\n   * 检查摄像头 麦克风权限\n   *\n   * resolve 成功  reject 失败{camera，record}\n   */\n  checkCameraAndRecord: () => {\n\n    return new Promise((resolve, reject) => {\n      //检查授权\n      wx.getSetting({\n        success(result) {\n\n          //有摄像头和麦克风权限\n          if (result.authSetting['scope.camera'] && result.authSetting['scope.record']) {\n            console.log(\"有camera和record权限！\")\n            resolve();\n\n            //没有摄像头权限\n          } else if (!result.authSetting['scope.camera'] || !result.authSetting['scope.record']) {\n            //授权摄像头\n            wx.authorize({\n              scope: 'scope.camera',\n              success(res) {\n                console.log(\"camera授权成功！\")\n              },\n              fail(res) {\n                //授权麦克风\n                console.log(\"camera授权失败！\",res)\n              },\n              complete() {\n                wx.authorize({\n                  scope: 'scope.record',\n                  success(res) {\n                    console.log(\"record授权成功！\")\n                  },\n                  fail(res) {\n                    console.log(\"record授权失败！\",res)\n                    // reject({record:false})\n                  },\n                  complete() {\n                    //重新获取配置\n                    wx.getSetting({\n                      success(res) {\n                        var authCamera = !!res.authSetting['scope.camera'],\n                          authRecord = !!res.authSetting['scope.record'];\n                        if (!authCamera || !authRecord) {\n                          var contentMsg = '您没有授权开启' + (authCamera ? '' : '摄像头  ') + (authRecord ? '' : '麦克风 ') + ',请前往开启。';\n                          //弹框去开启\n                          wx.showModal({\n                            content: contentMsg,\n                            showCancel: false,\n                            success(res) {\n                              wx.openSetting({\n                                success: (res) => {\n\n                                  if (res.authSetting['scope.camera'] && res.authSetting['scope.record']) {\n                                    resolve();\n                                  } else {\n                                    reject({\n                                      camera: authCamera,\n                                      record: authRecord\n                                    })\n                                  }\n\n\n                                }\n                              })\n                            }\n                          })\n                        } else {\n                          resolve();\n                        }\n                      }\n                    })\n                  }\n                })\n\n              }\n            })\n\n\n\n          }\n\n\n\n\n        },\n        fail(err){\n          console.log(err)\n        }\n      })\n    })\n\n\n  },\n\n   /**\n   * 定位位置权限\n   *\n   * resolve 成功  reject 失败{userLocation1}\n   */\n  checkLocationPermission: () => {\n    // var _this = this;\n    return new Promise((resolve, reject) => {\n      wx.getSetting({\n        success: (res) => {\n          console.log('用户首次进入页面授权')\n          const userLocation = res.authSetting['scope.userFuzzyLocation']\n          if (!userLocation) {\n\n            wx.authorize({\n              scope: 'scope.userFuzzyLocation',\n              success(res) {\n                console.log(\"userFuzzyLocation授权成功！\")\n              },\n              fail(res) {\n                //授权麦克风\n                console.log(\"userFuzzyLocation授权失败！\",res)\n              },\n              complete() {\n                wx.getSetting({\n                      success(res) {\n                        var userLocation1 = !!res.authSetting['scope.userFuzzyLocation'];\n                        if (!userLocation1) {\n                          //弹框去开启\n                          wx.showModal({\n                            content: '需要获取您的地理位置，请确认授权',\n                            showCancel: false,\n                            success(res) {\n                              wx.openSetting({\n                                success: (res) => {\n\n                                  if (res.authSetting['scope.userFuzzyLocation']) {\n                                    resolve();\n                                  } else {\n                                    reject({\n                                      userLocation1\n                                    })\n                                  }\n\n\n                                }\n                              })\n                            }\n                          })\n                        } else {\n                          resolve();\n                        }\n                      }\n                    })\n\n\n              }\n            })\n            //未授权\n\n          } else {\n            console.log('授权成功')\n            //调用wx.getLocation的API\n            resolve();\n          }\n        }\n      })\n    })\n\n\n\n  }\n\n}\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);