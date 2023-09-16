package com.propertyeditor;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = PropertyEditorModule.NAME)
public class PropertyEditorModule extends ReactContextBaseJavaModule {
  public static final String NAME = "PropertyEditor";
  protected ReactApplicationContext reactContext;
  protected String contextName;

  public PropertyEditorModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
    this.contextName = "default";
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void setContextName(String contextName) {
    Log.d(NAME, "setContextName: " + contextName);
    this.contextName = contextName;
  }

  @ReactMethod
  public void getNumber(String key, Double defaultValue, Promise promise) {
    Log.d(NAME, "getNumber: " + key);
    SharedPreferences preferences = reactContext.getSharedPreferences(contextName, Context.MODE_PRIVATE);
    Float f = preferences.getFloat(key, defaultValue == null ? null : defaultValue.floatValue());
    promise.resolve(f.doubleValue());
  }

  @ReactMethod
  public void setNumber(String key, Double value) {
    Log.d(NAME, "setNumber: " + key + ", " + value);
    SharedPreferences preferences = reactContext.getSharedPreferences(contextName, Context.MODE_PRIVATE);
    SharedPreferences.Editor editor = preferences.edit();
    if (value == null) {
      editor.remove(key);
    } else {
      editor.putFloat(key, value.floatValue());
    }
    editor.apply();
  }

  @ReactMethod
  public void getString(String key, String defaultValue, Promise promise) {
    Log.d(NAME, "getString: " + key);
    SharedPreferences preferences = reactContext.getSharedPreferences(contextName, Context.MODE_PRIVATE);
    String s = preferences.getString(key, defaultValue);
    promise.resolve(s);
  }

  @ReactMethod
  public void setString(String key, String value) {
    Log.d(NAME, "setString: " + key + ", " + value);
    SharedPreferences preferences = reactContext.getSharedPreferences(contextName, Context.MODE_PRIVATE);
    SharedPreferences.Editor editor = preferences.edit();
    if (value == null) {
      editor.remove(key);
    } else {
      editor.putString(key, value);
    }
    editor.apply();
  }

  @ReactMethod
  public void getBoolean(String key, Boolean defaultValue, Promise promise) {
    Log.d(NAME, "getBoolean: " + key);
    SharedPreferences preferences = reactContext.getSharedPreferences(contextName, Context.MODE_PRIVATE);
    Boolean b = preferences.getBoolean(key, defaultValue);
    promise.resolve(b);
  }

  @ReactMethod
  public void setBoolean(String key, Boolean value) {
    Log.d(NAME, "setBoolean: " + key + ", " + value);
    SharedPreferences preferences = reactContext.getSharedPreferences(contextName, Context.MODE_PRIVATE);
    SharedPreferences.Editor editor = preferences.edit();
    if (value == null) {
      editor.remove(key);
    } else {
      editor.putBoolean(key, value);
    }
    editor.apply();
  }
}
