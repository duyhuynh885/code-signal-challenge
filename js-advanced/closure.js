// function createCounter() {
//   var counter = 0; // N luon duoc khoi tao khoi ham f1 dduowcj thuc thi
//   function increase() {
//     // Ham f2
//     return (counter += 1); // cong don cho bien N
//   }
//   return increase;
// }

// var counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// Tao 1 logger dua tren closure

// function createLogger(namespace) {
//   function logger(message) {
//     console.error(`[${namespace}]: ${message}`);
//   }
//   return logger
// }
// // ========== App ===================

// // Register.js

// const infoLogger = createLogger('INFO')
// infoLogger('Bắt đầu gửi mail');
// infoLogger('Gửi mail lỗi lần 1 , thử gửi lại...')
// infoLogger('Gửi mail thành công cho user xxx')

// const errorLogger = createLogger('Error')
// errorLogger('Bắt đầu gửi mail');
// errorLogger('Gửi mail lỗi lần 1 , thử gửi lại...')
// errorLogger('Gửi mail thành công cho user xxx')

// tao 1 ham luu vao storage

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) { 
      delete store[key];
      save();
    },
  };
}

//Profile.js

const ProfileSetting = createStorage("profile_setting");
