class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * 
     * given an array of number return true if any number is reapeating otherwise false
     * My solution:
     * loop throught array to check repeating numbers 
     * 
     * 
     */
    hasDuplicate(nums) {

        for (let i = 0; i < nums.length; i++){

            for (let j = i + 1; j < nums.length; j++){
                
                if(nums[i] === nums[j]){
                    return true
                }

                }
            }
            return false

        }
    }
    
    



