const reverseList = (head: ListNode | null): ListNode | null => {
    let p1: ListNode | null = null;
    let p2: ListNode | null = head;
    while(p2 !== null){
        const p3: ListNode | null = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p3;
    }
    return p1;
}
