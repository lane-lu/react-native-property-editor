#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(PropertyEditor, NSObject)

RCT_EXTERN_METHOD(setContextName:(NSString *)contextName)

RCT_EXTERN_METHOD(getNumber:(NSString *)key defaultValue:(NSNumber *)defaultValue
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setNumber:(NSString *)key value:(nonnull NSNumber *)value)

RCT_EXTERN_METHOD(getString:(NSString *)key defaultValue:(NSString *)defaultValue
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setString:(NSString *)key value:(NSString *)value)

RCT_EXTERN_METHOD(getBoolean:(NSString *)key defaultValue:(BOOL *)defaultValue
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setBoolean:(NSString *)key value:(BOOL *)value)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
