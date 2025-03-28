import axios from 'axios';

// 환경 변수에서 API 기본 URL을 가져오고, 없으면 기본값을 사용합니다.
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

// axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 요청 인터셉터: 필요시 토큰 등을 헤더에 추가할 수 있습니다.
axiosInstance.interceptors.request.use(
    (config) => {
        // 예시: 로컬 스토리지에서 토큰을 가져와 Authorization 헤더에 추가
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터: 에러 처리 로직을 추가합니다.
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // 에러 처리 로직을 여기에 구현할 수 있습니다.
        return Promise.reject(error);
    }
);

export default axiosInstance;


// axiosInstance.get('path', {
//     adapter: 'fetch' // by default ['xhr', 'http', 'fetch']
// })

// const response = await axiosInstance.get('path', {
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/xml',
//         Authorization: 'Bearer specialToken',
//     }
// })
// axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axiosInstance.defaults.timeout = 1000;
// axiosInstance.defaults.headers.post['Context-Type'] = 'multipart/form-data';