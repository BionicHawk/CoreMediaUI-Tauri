// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod services;

use crate::services::net_service::get_ips;
use crate::services::server_service::{run_server, close_server};
use crate::services::pointer_service::{start_pointer, close_pointer};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet, 
            get_ips, 
            run_server, 
            close_server,
            start_pointer,
            close_pointer])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
