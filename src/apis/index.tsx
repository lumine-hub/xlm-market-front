// 请求地址
const apiHostUrl = process.env.API_HOST_URL ? process.env.API_HOST_URL : "https://mock.apipost.net/mock/2e4398727b1007";

/**
 * 查询抽奖奖品列表
 * @param strategyId 策略ID
 */
export const queryRaffleAwardList = (strategyId: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/query_raffle_award_list?apipost_id=2e43eec4fb100f`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }
}

/**
 * 随机抽奖接口
 * @param strategyId 策略ID
 *
 * {
 * 	"code": "0000",
 * 	"info": "调用成功",
 * 	"data": {
 * 	    "awardIndex": 1, // awardIndex 获得的是列表中第几个奖品，方便测试使用
 * 		"awardId": 535,
 * 		"awardTitle": "一部手机"
 * 	}
 * }
 */
export const randomRaffle = (strategyId: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/random_raffle?strategyId=${strategyId}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }
}