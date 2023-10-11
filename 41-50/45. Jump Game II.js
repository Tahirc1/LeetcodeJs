var jump = function(nums) {
  let [far,jump,current] = [0,0,0]
  for(let i = 0; i < nums.length-1; i++) {
    far = Math.max(far, nums[i] + i);
    if(i === current){
      current = far;
      jump++;
    }
  }
  return jump;
};