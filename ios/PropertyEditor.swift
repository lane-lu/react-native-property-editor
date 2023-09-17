@objc(PropertyEditor)
class PropertyEditor: NSObject {
    
    @objc(setContextName:)
    func setContextName(contextName: String) -> Void {
        print("setContextName", contextName)
    }

    @objc(getNumber:defaultValue:withResolver:withRejecter:)
    func getNumber(key: String, defaultValue: Double, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        print("getNumber", key, defaultValue)
        let value: Double = UserDefaults.standard.double(forKey: key)
        resolve(value)
    }
    
    @objc(setNumber:value:)
    func setNumber(key: String, value: Double) -> Void {
        print("setNumber", key, value)
        UserDefaults.standard.set(value, forKey: key)
    }
    
    @objc(getString:defaultValue:withResolver:withRejecter:)
    func getString(key: String, defaultValue: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        print("getString", key, defaultValue)
        let value: String? = UserDefaults.standard.string(forKey: key)
        if let s = value {
            resolve(s)
        } else {
            resolve(defaultValue)
        }
    }
    
    @objc(setString:value:)
    func setString(key: String, value: String) -> Void {
        print("setString", key, value)
        UserDefaults.standard.set(value, forKey: key)
    }
    
    @objc(getBoolean:defaultValue:withResolver:withRejecter:)
    func getBoolean(key: String, defaultValue: Bool, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        print("getBoolean", key, defaultValue)
        let value: Bool = UserDefaults.standard.bool(forKey: key)
        resolve(value)
    }
    
    @objc(setBoolean:value:)
    func setBoolean(key: String, value: Bool) -> Void {
        print("setBoolean", key, value)
        UserDefaults.standard.set(value, forKey: key)
    }
}
