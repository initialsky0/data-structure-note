# from warm_up import warm_up
import constant
import time

# l_list = ['nemo' for name in range(100)]
test_data = [1, 2, 3, 4, 5, 6]
test_sum = 8

def find_nemo(array):
   time_start = time.time()
   # Iterate way:
   for i in range(len(array)):
      if array[i] == 'nemo':
         print('Found NEMO')
      else:
         print('Not NEMO')
   return time.time() - time_start

   # Direct way
   # for val in array:
   #    if val == 'nemo':
   #       print('Found NEMO')
   #       return 1
   #    else:
   #       print('NEMO is not here')
   #       return 0

def has_pair_with_sum_2(arr, sum):
   my_set = set()
   for val in arr:
      if val in my_set:
         return True
      my_set.add(sum - val)
   return False

def main():
   # print('time: {0:.9f}'.format(find_nemo(constant.NEMO)))
   # print('time: {0:.9f}'.format(find_nemo(l_list)))
   print(has_pair_with_sum_2(test_data, test_sum))
   
if __name__ == "__main__":
    main()