class ListNode {
    val: number
    next: ListNode | null;
    construction(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    };
};
const hasCycle = (head: ListNode | null): boolean => {
    if(head === null || head.next === null) 
        return false;
    let current = head;
    const MAX_NODES = 10**3;
    for(let i = 0; i <= MAX_NODES ; i++){
        if(!current)
            return false;
        current = current.next;
    };
    return true;
};
const hasCycle2 = (head: ListNode | null): boolean => {
        if(head){
        let slow: ListNode = head;
        let fast: ListNode = head;
        
        
    while (fast !== null && fast.next !== null) {
                slow = slow.next;
                fast = fast.next.next;
        if (slow === fast) {
                        return true;
                    
        };
            
        };
    };
        return false;
    
};
