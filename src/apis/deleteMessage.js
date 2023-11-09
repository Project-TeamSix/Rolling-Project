import requestAPI from "./api";
import { apiConfig } from "./apiConfig";

/**
 * 특정 메시지를 삭제하는 비동기 함수
 * @async
 * @param {Object} params - 함수에 전달하는 매개변수 객체
 * @param {string} params.id - 삭제할 메시지의 고유 식별자
 * @returns {Promise} - 삭제 요청의 비동기 Promise
 */
const deleteMessage = async ({ id }) => {
  const endpoint = apiConfig.endpoints.messages.delete(id);

  const option = {
    method: "DELETE",
  };

  return await requestAPI({ endpoint: `${endpoint}`, option });
};

export default deleteMessage;