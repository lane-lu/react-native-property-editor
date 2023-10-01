@objc(PropertyEditor)
class PropertyEditor: NSObject {
    
    @objc(setContextName:)
    func setContextName(contextName: String) -> Void {
        print("setContextName", contextName)
    }

    @objc(getNumber:withResolver:withRejecter:)
    func getNumber(key: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        print("getNumber", key)
        let value: Double = UserDefaults.standard.double(forKey: key)
        resolve(value)
    }
    
    @objc(setNumber:value:)
    func setNumber(key: String, value: NSNumber) -> Void {
        print("setNumber", key, value.doubleValue)
        UserDefaults.standard.set(value.doubleValue, forKey: key)
    }
    
    @objc(getString:withResolver:withRejecter:)
    func getString(key: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        print("getString", key)
        let value: String? = UserDefaults.standard.string(forKey: key)
        resolve(value)
    }
    
    @objc(setString:value:)
    func setString(key: String, value: String) -> Void {
        print("setString", key, value)
        UserDefaults.standard.set(value, forKey: key)
    }
    
    @objc(getBoolean:withResolver:withRejecter:)
    func getBoolean(key: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        print("getBoolean", key)
        let value: Bool = UserDefaults.standard.bool(forKey: key)
        resolve(value)
    }
    
    @objc(setBoolean:value:)
    func setBoolean(key: String, value: Bool) -> Void {
        print("setBoolean", key, value)
        UserDefaults.standard.set(value, forKey: key)
    }
}
